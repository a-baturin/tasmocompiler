import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import NextButton from './NextButton';
import BackButton from './BackButton';

class CustomParametersStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customParams: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { pstate } = this.props;
    // let ncp = '';
    // let pcp = '';

    const ncp = Object.keys(pstate)
      .filter(name => name.startsWith('precustom_'))
      .reduce((acc, cval) => `${acc}\n${pstate[cval]}`, '');
    const pcp = Object.keys(prevProps.pstate)
      .filter(name => name.startsWith('precustom_'))
      .reduce((acc, cval) => `${acc}\n${prevProps.pstate[cval]}`, '');

    // Object.keys(pstate).forEach((name) => {
    //   if (name.startsWith('precustom_')) {
    //     console.log(name);
    //     if (ncp) {
    //       ncp = `${ncp}\n${pstate[name]}`;
    //     } else {
    //       ncp = `${pstate[name]}`;
    //     }
    //   }
    // });
    // Object.keys(prevProps.pstate).forEach((name) => {
    //   if (name.startsWith('precustom_')) {
    //     if (pcp) {
    //       pcp = `${pcp}\n${prevProps.pstate[name]}`;
    //     } else {
    //       pcp = `${prevProps.pstate[name]}`;
    //     }
    //   }
    // });

    if (ncp !== pcp) {
      console.log('Przepisuję propsy');
      console.log(`PREV: ${pcp}`);
      // console.log(`PREV2: ${tmp2}`);
      console.log(`NEW: ${ncp}`);
      // console.log(`NEW2: ${tmp1}`);
      this.setState({ customParams: ncp });
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleNext() {
    const { nextHandler } = this.props;
    nextHandler({ ...this.state });
  }

  handleBack() {
    const { backHandler } = this.props;
    backHandler();
  }

  render() {
    const stepName = 'Custom parameters';
    const {
      classes,
      nextHandler,
      backHandler,
      ...other
    } = this.props;
    const { customParams } = this.state;
    const placeholder = '#ifdef USE_MCP230xx\n #undef USE_MCP230xx\n#endif\n#define USE_MCP230xx\n\n'
                        + '#ifdef USE_MCP230xx_ADDR\n #undef USE_MCP230xx_ADDR\n#endif\n#define USE_MCP230xx_ADDR 0x20\n';

    return (
      <Step {...other}>
        <StepLabel>{stepName}</StepLabel>
        <StepContent>
          <Typography>
            Below you can enter custom parameters, which will be included at the end of
            <em> user_config_override.h </em>
            file. If you don&apos;t know what it is, just click Next.
          </Typography>
          <form noValidate autoComplete="off">
            <div className={classes.actionsContainer}>
              <TextField
                // id='reg_customParams'
                placeholder={placeholder}
                name="customParams"
                label="Custom parameters"
                fullWidth
                multiline
                rows={9}
                rowsMax={9}
                className={classes.multiTextField}
                value={customParams}
                onChange={this.handleChange}
                margin="normal"
                InputProps={{
                  classes: {
                    input: classes.inputFont,
                  },
                }}
              />
            </div>
          </form>
          <div className={classes.actionsContainer}>
            <div className={classes.wrapper}>
              <BackButton disabled={false} onClick={this.handleBack} />
            </div>
            <div className={classes.wrapper}>
              <NextButton disabled={false} onClick={this.handleNext} />
            </div>
          </div>
        </StepContent>
      </Step>
    );
  }
}

CustomParametersStep.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  pstate: PropTypes.oneOfType([PropTypes.object]).isRequired,
  nextHandler: PropTypes.func.isRequired,
  backHandler: PropTypes.func.isRequired,
};

export default CustomParametersStep;
