import React, { Component, Fragment } from 'react';
import {getLoggedInUser} from '../utils'

/*
  Render-props можно использовать для вынесения стейтфул логики

  Напишите компонент, который будет добавлять тултип к кнопке.
  Пусть тултип будет обычным `div`

  Пусть на тултипе будет написано "Hello, i'm Tooltip"

  Укажите у тултипа аттрибут `data-testid="tooltip"`

  Кнопка должна получать onClick коллбек из компонента-обёртки
*/

export const WithTooltip = ({children}) => {
  class TooltipButton extends Component {
    state = { tooltip: false };
  
    onClick = () => {
      this.setState(prevState => {
        return {
          tooltip: !prevState.tooltip
        };
      });
    };
  
    render() {
      const { tooltip } = this.state;
  
      return (
        <Fragment>
          {children(this.onClick)}
          {tooltip && <div data-testid="tooltip">Hello, i'm Tooltip</div>}
        </Fragment>
      )
    }
  }

  return <TooltipButton/>
}