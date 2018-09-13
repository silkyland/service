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
          url: "/other/breadcrumbs",
          icon: "icon-puzzle"
        },
        {
          name: "ระบบปฏิบัติการ",
          url: "/admin/other/operatingSystem",
          icon: "fa fa-cubes"
        }
      ]
    },
    {
      name: "ผู้ใช้งาน",
      url: "/admin/users",
      icon: "fa fa-users"
    }
  ]
};
