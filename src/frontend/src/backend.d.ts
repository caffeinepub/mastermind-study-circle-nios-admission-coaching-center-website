import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface PageContent {
    title: string;
    body: string;
    footer: string;
    header: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllPages(): Promise<Array<[string, PageContent]>>;
    getCallerUserRole(): Promise<UserRole>;
    getHomePage(): Promise<PageContent>;
    getPage(pageId: string): Promise<PageContent | null>;
    getPages(pageIds: Array<string>): Promise<Array<[string, PageContent]>>;
    isCallerAdmin(): Promise<boolean>;
    removePage(pageId: string): Promise<boolean>;
    updatePage(pageId: string, content: PageContent): Promise<void>;
}
