CREATE TABLE `result` (
	`key` text NOT NULL,
	`result` text NOT NULL,
	`type` text NOT NULL,
	`createdAt` integer NOT NULL,
	`isDeleted` integer DEFAULT false,
	`deletedAt` integer,
	PRIMARY KEY(`key`, `result`)
);
