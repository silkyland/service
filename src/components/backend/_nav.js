export default {
  items: [
    {
      name: "Dashboard",
      url: "/admin/dashboard",
      icon: "icon-speedometer",
      badge: {
        variant: "info",
        text: "NEW"
      }
    },
    {
      title: true,
      name: "Theme",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "" // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Colors",
      url: "/theme/colors",
      icon: "icon-drop"
    },
    {
      name: "Typography",
      url: "/theme/typography",
      icon: "fa fa-pencil"
    },
    {
      divider: true
    },
    {
      title: true,
      name: "จัดการ"
    },
    {
      name: "ทั่วไป",
      url: "/other",
      icon: "icon-puzzle",
      children: [
        {
          name: "พื้นที่จัดการศึกษา",
          url: "/admin/other/campus",
          icon: "icon-puzzle"
        },
        {
          name: "ระบบปฏิบัติการ",
          url: "/admin/other/operatingSystem",
          icon: "fa fa-cubes"
        },
        {
          name: "โปรแกรม",
          url: "/admin/other/application",
          icon: "fa fa-cubes"
        },
        {
          name: "ยี่ห้อ",
          url: "/admin/other/brand",
          icon: "fa fa-cubes"
        },
        {
          name: "ผู้มาขอบริการ",
          url: "/admin/other/client",
          icon: "fa fa-users"
        },
        {
          name: "ประเภทผู้ขอบริการ",
          url: "/admin/other/clientType",
          icon: "fa fa-cubes"
        },
        {
          name: "สังกัด",
          url: "/admin/other/department",
          icon: "fa fa-cubes"
        },
        {
          name: "อุปกรณ์",
          url: "/admin/other/device",
          icon: "fa fa-cubes"
        },
        {
          name: "ประเภทอุปกรณ์",
          url: "/admin/other/deviceType",
          icon: "fa fa-cubes"
        },
        {
          name: "สิ่งที่นำมาด้วย",
          url: "/admin/other/inventory",
          icon: "fa fa-cubes"
        },
        {
          name: "ปัญหา",
          url: "/admin/other/issue",
          icon: "fa fa-cubes"
        },
        {
          name: "โปรแกรมสำนักงาน",
          url: "/admin/other/office",
          icon: "fa fa-cubes"
        },
        {
          name: "สถานะ",
          url: "/admin/other/status",
          icon: "fa fa-cubes"
        }
        // {
        //   name: "ยี่ห้อ",
        //   url: "/admin/other/brand",
        //   icon: "fa fa-cubes"
        // }
      ]
    },
    {
      name: "ผู้ใช้งาน",
      url: "/admin/users",
      icon: "fa fa-users"
    }
  ]
};
