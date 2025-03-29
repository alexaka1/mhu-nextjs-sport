ALTER TABLE `result` ADD `year` integer DEFAULT 2024 NOT NULL;--> statement-breakpoint
ALTER TABLE `user` ADD `roles` text DEFAULT '{"roles":[]}';