/**
 * Types for the Disciplinary Homes API
 */

export type ActivityItemData = {
	action: ActionType;
	child?: ChildData;
	parent?: ParentData;
	member?: MemberData;
	organization?: string;
	time_since?: string;
}

export type ActivityFeedData = {
	activity_feed: ActivityItemData[];
}

export enum ActionType {
	NEW_POST    = "new_post",
	REPLY_TOPIC = "reply_topic",
}

export type ChildData = {
	title: string;
	preview: string;
	link: string;
}

export type ParentData = {
	name: string;
	link: string;
}

export type MemberData = {
	name: string;
	profile: string;
	avatar: string;
}
