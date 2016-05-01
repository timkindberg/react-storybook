'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainStyle = (0, _extends3.default)({}, _theme.baseFonts, {
  border: '1px solid #ECECEC',
  borderRadius: 2,
  position: 'relative'
});

var TextFilter = function (_React$Component) {
  (0, _inherits3.default)(TextFilter, _React$Component);

  function TextFilter(props, ctx) {
    (0, _classCallCheck3.default)(this, TextFilter);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TextFilter).call(this, props, ctx));
  }

  (0, _createClass3.default)(TextFilter, [{
    key: 'onChange',
    value: function onChange(event) {
      var text = event.target.value;
      var onChange = this.props.onChange;

      if (onChange) onChange(text);
    }
  }, {
    key: 'fireOnClear',
    value: function fireOnClear() {
      var onClear = this.props.onClear;

      if (onClear) onClear();
    }
  }, {
    key: 'render',
    value: function render() {
      var textWrapStyle = {
        background: '#F7F7F7',
        paddingRight: 25
      };

      var textStyle = (0, _defineProperty3.default)({
        fontSize: 12,
        color: '#828282',
        padding: 5,
        display: 'block',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        outline: 'none',
        border: 0
      }, 'height', 26);

      var clearButtonStyle = {
        position: 'absolute',
        color: '#B1B1B1',
        border: 'none',
        width: 25,
        height: 26,
        right: 0,
        top: 2,
        textAlign: 'center',
        cursor: 'pointer'
      };

      return _react2.default.createElement(
        'div',
        { style: mainStyle },
        _react2.default.createElement(
          'div',
          { style: textWrapStyle },
          _react2.default.createElement('input', {
            style: textStyle,
            type: 'text',
            placeholder: 'Filter',
            name: 'filter-text'
            // This is make sure we'll always set a value
            // otherwise, this is marked as an uncontrolled input and
            // once, we get the text, it'll became controlled.
            // React does not allow that.
            , value: this.props.text || "",
            onChange: this.onChange.bind(this)
          })
        ),
        _react2.default.createElement(
          'div',
          {
            style: clearButtonStyle,
            onClick: this.fireOnClear.bind(this)
          },
          'x'
        )
      );
    }
  }]);
  return TextFilter;
}(_react2.default.Component);

exports.default = TextFilter;


TextFilter.propTypes = {
  text: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func,
  onClear: _react2.default.PropTypes.func
};