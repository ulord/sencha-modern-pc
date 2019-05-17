Ext.define('App.store.systemmanage.sysmenu.TreeStore', {
    extend: 'Ext.data.TreeStore',
    autoLoad: false,
    alias: 'store.systemmanage.sysmenu.treestore',
    model: 'App.model.systemmanage.SysMenuButtonDetail',
    proxy: {
        type: 'api',
        reader: {
            type:"jsonreader",
            rootProperty: "children",
            datatype: config.DataType.TreeStore,
            idField: "Id",
            parentField: "ParentId",
            isExpand: true,
            rootId: "00000000-0000-0000-0000-000000000000"
        },
        url: '/api/SystemManage/SysMenu/GetSysMenuButtonTreeDetail',
    }
});
