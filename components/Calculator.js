import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../styles/Calculator'
import CalculatorController from '../controllers/CalculatorController';

export default class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      textCalculator: '',
      result: false
    }

    this.deal = this.deal.bind(this);
    this.renderNumberButtons = this.renderNumberButtons.bind(this);
    this.renderAddButton = this.renderAddButton.bind(this);
    this.renderSubtractButton = this.renderSubtractButton.bind(this);
    this.renderMultiplyButton = this.renderMultiplyButton.bind(this);
    this.renderDivideButton = this.renderDivideButton.bind(this);
  }

  render() {
    return <View style={styles.container}>
      <Text style={styles.text}>{this.state.textCalculator}</Text>
      <View style={styles.buttonNumberContainer}>
        {this.renderNumberButtons()}
      </View>
      <View style={styles.buttonOperationContainer}>
        {this.renderAddButton()}
        {this.renderSubtractButton()}
        {this.renderMultiplyButton()}
        {this.renderDivideButton()}
      </View>
      <View style={styles.buttonControlContainer}>
        {this.renderBackButton()}
        {this.renderEqualButton()}
      </View>
    </View>;
  }

  renderNumberButtons() {
    let buttons = [];
    let buttonRaw = [];
    for (let i = 0; i < 9; i++) {
      let iDesired = i + 1;
      if (i > 0 && i % 3 == 0) {
        buttons.push(<View style={styles.buttonRaw}>
          {buttonRaw}
        </View>
        );

        buttonRaw = [];
      }

      buttonRaw.push(<View style={styles.buttonItem}>
        <Button color='darkorange' onPress={this.deal.bind(this, iDesired)} title={'' + iDesired} />
      </View>
      );
    }

    buttons.push(<View style={styles.buttonRaw}>{buttonRaw}</View>,
      <View style={styles.buttonRawZero}><Button color='darkorange' onPress={this.deal.bind(this, 0)} title={'0'} /></View>
    );
    return buttons;
  }

  renderAddButton() {
    return <View style={styles.buttonOperationItem}>
      <Button color='darkgray' onPress={this.deal.bind(this, '+')} title={'+'} />
    </View>;
  }

  renderSubtractButton() {
    return <View style={styles.buttonOperationItem}>
      <Button color='darkgray' onPress={this.deal.bind(this, '-')} title={'-'} />
    </View>;
  }

  renderMultiplyButton() {
    return <View style={styles.buttonOperationItem}>
      <Button color='darkgray' onPress={this.deal.bind(this, '*')} title={'*'} />
    </View>;
  }

  renderDivideButton() {
    return <View style={styles.buttonOperationItem}>
      <Button color='darkgray' onPress={this.deal.bind(this, '/')} title={'/'} />
    </View>;
  }

  renderBackButton() {
    return <View style={styles.buttonBack}>
      <Button color='darkgray' onPress={this.deal.bind(this, '<')} title={'<'} />
    </View>;
  }

  renderEqualButton() {
    return <View style={styles.buttonEqual}>
      <Button color='darkgoldenrod' onPress={this.deal.bind(this, '=')} title={'='} />
    </View>;
  }

  deal(item) {
    this.setState(new CalculatorController().deal(item, this.state.result, this.state.textCalculator));
  }
}