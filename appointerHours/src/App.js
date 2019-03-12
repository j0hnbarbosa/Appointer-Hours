import React, { Component } from "react";
import moment from 'moment';
import {
  Accordion,
  Button,
  Container,
  Content,
  Header,
  Text,
  View,
} from "native-base";

class AccordionIconStyleExample extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataArray: [],
    }
  }

  onChangeHour = () => {
    const {dataArray} = this.state;
    dataArray.unshift({title: moment().format("DD-MM-YYYY"), content: JSON.stringify(moment())});
    this.setState({dataArray});

  }

  render() {
    const { dataArray, } = this.state;
    return (
      <Container>
        <Header />
        <View
          style={{
            display: "flex",
            padding: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"}}
        >
          <Button
            onPress={this.onChangeHour} center rounded info>
              <Text>PRESS</Text>
          </Button>

        </View>
        <Content padder>
            <Accordion
              dataArray={dataArray}
              icon="add"
              expandedIcon="remove"
              iconStyle={{ color: "green" }}
              expandedIconStyle={{ color: "red" }}
            />
          </Content>
      </Container>
    );
  }
}


export default AccordionIconStyleExample;