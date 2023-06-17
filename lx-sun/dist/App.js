var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";
// import Transition from "./components/Transition/transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';
import Input from "./components/Input/input";
import Upload from "./components/Upload/upload";
import AutoComplete from "./components/AutoComplete/autoComplete";
library.add(fas);
function App() {
    var arr = ['jack', 'smith', 'tom', 'lisa', 'linda', 'mary', 'john', 'David'];
    // 同步搜索
    // const handleFetch = (query: string) => {
    //     return arr.filter(name => name.includes(query)).map(name => ({value: name}))
    // }
    // 异步搜索
    var handleFetch = function (query) {
        return fetch("https://api.github.com/search/users?q=".concat(query))
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var items = _a.items;
            console.log(items);
            return items.slice(0, 10).map(function (item) { return (__assign({ value: item.login }, item)); });
        });
    };
    var style = {
        color: '#ffffff',
        backgroundColor: '#1e90ff'
    };
    return (React.createElement("div", { className: "App" },
        React.createElement(Icon, { icon: 'sun', size: '6x', spin: true, theme: 'danger' }),
        React.createElement(FontAwesomeIcon, { icon: 'coffee', size: '4x' }),
        React.createElement(FontAwesomeIcon, { icon: 'school', size: '4x' }),
        React.createElement("h5", { style: style }, "button component"),
        React.createElement(Button, { onClick: function () { return alert('测试点击事件成功!'); }, className: '\u6D4B\u8BD5\u81EA\u5B9A\u4E49\u7C7B\u540D' }, "\u9ED8\u8BA4\u6309\u94AE"),
        React.createElement(Button, { disabled: true }, "\u7981\u7528\u9ED8\u8BA4\u6309\u94AE"),
        React.createElement(Button, { btnType: 'primary', size: 'lg' }, "Primary\u6309\u94AE"),
        React.createElement(Button, { btnType: 'link', href: 'https://baidu.com' }, "\u94FE\u63A5\u6309\u94AE"),
        React.createElement(Button, { btnType: 'link', href: 'https://baidu.com', disabled: true }, "\u94FE\u63A5\u7981\u7528\u6309\u94AE"),
        React.createElement("hr", null),
        React.createElement("h5", { style: style }, "menu-component"),
        React.createElement(Menu, { defaultIndex: '3', onSelect: function (index) { return alert(index); }, mode: 'horizontal', defaultOpenSubMenus: ['3'] },
            React.createElement(MenuItem, null, "one"),
            React.createElement(MenuItem, { disabled: true }, "two"),
            React.createElement(MenuItem, null, "three"),
            React.createElement(SubMenu, { title: '\u4E0B\u62C9\u83DC\u5355' },
                React.createElement(MenuItem, null, "111"),
                React.createElement(MenuItem, null, "222"),
                React.createElement(MenuItem, null, "333"))),
        React.createElement("hr", null),
        React.createElement("h5", { style: style }, "upload-component"),
        React.createElement(Upload, { action: "https://www.mocky.io/v2/5cc8019d300000980a055e76", name: "fileName", multiple: true, drag: true, onProgress: function () {
            } },
            React.createElement(Icon, { icon: "upload", size: "8x", theme: "secondary" })),
        React.createElement("hr", null),
        React.createElement("h5", { style: style }, "Input-component"),
        React.createElement(Input, { prepend: 'https://', append: '.com', placeholder: '\u8BF7\u8F93\u5165\u5185\u5BB9:' }),
        React.createElement(Input, { disabled: true, placeholder: '\u7981\u6B62\u8F93\u5165' }),
        React.createElement(Input, { size: 'lg', placeholder: '\u5927\u8F93\u5165\u6846' }),
        React.createElement(Input, { size: 'sm', placeholder: '\u5C0F\u8F93\u5165\u6846' }),
        React.createElement(Input, { placeholder: '\u5E26\u56FE\u6807\u7684\u8F93\u5165\u6846', icon: 'school' }),
        React.createElement("hr", null),
        React.createElement("h5", { style: style }, "autoComplete-component"),
        React.createElement(AutoComplete, { fetchSuggestions: handleFetch })));
}
export default App;
