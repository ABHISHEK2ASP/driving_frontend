export interface RouteInfo{
    path:string;
    title:string;
    icon: string;
    class: string;
    submenu: RouteInfo[];
    role:string;
}