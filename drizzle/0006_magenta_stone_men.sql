DROP INDEX `session_session_token_unique`;--> statement-breakpoint
DROP INDEX `session_token_idx`;--> statement-breakpoint
ALTER TABLE `session` ADD `expires_at` integer NOT NULL;--> statement-breakpoint
ALTER TABLE `session` ADD `token` text NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `session_token_unique` ON `session` (`token`);--> statement-breakpoint
CREATE INDEX `session_token_idx` ON `session` (`token`);--> statement-breakpoint
ALTER TABLE `session` DROP COLUMN `expires`;--> statement-breakpoint
ALTER TABLE `session` DROP COLUMN `session_token`;--> statement-breakpoint
ALTER TABLE `account` ADD `account_id` text NOT NULL;--> statement-breakpoint
ALTER TABLE `account` ADD `provider_id` text NOT NULL;--> statement-breakpoint
ALTER TABLE `account` ADD `access_token_expires_at` integer;--> statement-breakpoint
ALTER TABLE `account` DROP COLUMN `provider_account_id`;--> statement-breakpoint
ALTER TABLE `account` DROP COLUMN `provider`;--> statement-breakpoint
ALTER TABLE `account` DROP COLUMN `expires_at`;--> statement-breakpoint
ALTER TABLE `verification` ADD `expires_at` integer NOT NULL;--> statement-breakpoint
ALTER TABLE `verification` DROP COLUMN `expires`;