/**
 * Types for the Disciplinary Homes API
 */

export type APIData = {
	activity_feed: ActivityItemData[];
	recent_deposits: DepositData[];
	popular_deposits: DepositData[];
	metrics: MetricsData;
}

export type ActivityItemData = {
	action: ActionType;
	child?: ChildData;
	parent?: ParentData;
	member?: MemberData;
	organization?: string;
	time_since?: string;
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

export type DepositData = {
	title: string;
	link: string;
	authors: string[];
	date: string;
}

export type MetricsData = {
	followers: number;
	deposits: number;
	downloads: number;
}
