import { NavigationDropdown, NavigationLink } from "src/@vex/interfaces/navigation-item.interface";

export const menuItems: NavigationDropdown[] = [
    {
        type: 'dropdown',
        path: 'agency',
        title: 'الوكالات',
        role: 1,
        id: 1,
        submenu: [
            {
                type: 'link',
                title: 'قائمة الوكالات',
                role: 1,
                id: 1,
                submenu: [],
                path: 'agency/list'
            },
            {
                type: 'link',
                title: 'بيانات الوكالة',
                role: 1,
                id: 1,
                submenu: [],
                path: 'agency/agency-data'
            },
        ]       
    }
]