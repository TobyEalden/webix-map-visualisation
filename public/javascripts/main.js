/**
 * Created by toby on 11/05/15.
 *
 */
//webix.debug = true;

webix.ready(function() {
  webix.ui({
    id: "mainLayout",
    rows:[
      {
        view:"toolbar",
        height: 50,
        elements: [
          { view: "label", template: "<div id='picoHeader'><span class='picoHeaderTitle'> &mdash; visualisation</span>"},
          {},
          {view:"label", template: "<div style='text-align: right;'>toby.ealden</div>" },
          {view:"icon", icon:"user"},
          {view:"icon", icon:"cog"}
        ]
      },
      {
        type: "space",
        cols: [
          {
            gravity: 0.2,
            header: "filter",
            collapsed: true,
            body: {
              view: "list", id: "sideBar", scroll: false, select: true, template: "#value#", data: [
                { id: "sensors", value: "sensors" },
                { id: "map", value: "map" },
                { id: "log", value: "activity log"},
                { id: "config", value: "configuration"}
              ],
              on: {
                onItemClick: function(id) {
                  $$("mainPanel").showBatch(id);
                }
              }
            }
          },
          {
            id: "mainPanel", visibleBatch: "map",
            rows: [
              {
                id: "sensorsPanel",
                view: "datatable",
                batch: "sensors",
                columns: [
                  { id: "sensorIdColumn", header: "sensor id" },
                  { id: "sensorLatColumn", header: "latitude" },
                  { id: "sensorLngColumn", header: "longitude" },
                  { id: "sensorActiveColumn", header: "active"},
                  { id: "sensorDescColumn", header: "description", fillspace: true }
                ]
              },
              { id: "mapPanel", view: "google-map", batch: "map", center: [54.300499, -2.109375] },
              {
                view: "datatable", batch: "log",
                columns: [
                  { id: "activityIdColumn", header: "sensor id" },
                  { id: "activityDateColumn", header: "date" },
                  { id: "activitySeverityColumn", header: "severity" },
                  { id: "activityDescColumn", header: "description", fillspace: true }
                ],
                resizeColumn: true
              },
              {
                id: "configurationPanel",
                batch: "config",
                view: "property",
                elements: [
                  { label: "notification email", type: "text", value: "toby.ealden@gmail.com"},
                  { label: "auto-calibrate sensors", type: "text", value: "on"}
                ]
              }
            ]
          }
        ]
      },
      {
        view: "toolbar",
        height: 45,
        elements: [
          { view: "label", id: "version", template: "<div style='font-size: .8em;'>v 0.0.0</div>" },
          {},
          { view: "label", id: "timestamp", template: "<div style='text-align: right;font-size: .8em;'><a href='nqminds.com'>nqminds.com</a></div>" }
        ]
      }
    ]
  });
});