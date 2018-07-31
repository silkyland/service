import React, { Component } from "react";
import { Tabs, Icon } from "antd";
const TabPane = Tabs.TabPane;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ paddingTop: 10 }}>
        <h1>สถานะการให้บริการ</h1>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <Icon type="check" /> เสร็จแล้ว
              </span>
            }
            key="1"
          >
            Tab 1
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="hourglass" /> ระหว่างดำเนินการ
              </span>
            }
            key="2"
          >
            Tab 2
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Home;
