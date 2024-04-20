import { auth } from '@/app/lib/auth';
import { isAdmin } from '@/app/db/data';

export const dynamic = 'force-dynamic';

export default async function EditResultButtons() {
  const session = await auth();
  if (session?.user?.email && session?.user?.email !== '') {
    const canEdit = await isAdmin(session.user.email);
    if (canEdit) {
      return (
        <>
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </>
      );
    }
  }
  return null;
}
