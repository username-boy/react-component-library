import React from 'react';
import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";
// import Transition from "./components/Transition/transition";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons';
import Input from "./components/Input/input";
import Upload from "./components/Upload/upload";
import Progress from "./components/Progress/progress";
import AutoComplete from "./components/AutoComplete/autoComplete";

library.add(fas);


function App() {
    const arr = ['jack', 'smith', 'tom', 'lisa', 'linda', 'mary', 'john', 'David']
    // 同步搜索
    // const handleFetch = (query: string) => {
    //     return arr.filter(name => name.includes(query)).map(name => ({value: name}))
    // }
    // 异步搜索
    const handleFetch = (query: string) => {
        return fetch(`https://api.github.com/search/users?q=${query}`)
            .then(res => res.json())
            .then(({items}) => {
                console.log(items)
                return items.slice(0, 10).map((item: any) => ({value: item.login, ...item}))
            })
    }
    const style = {
        color: '#ffffff',
        backgroundColor: '#1e90ff'
    }
    return (
        <div className="App">
            <Icon icon='sun' size='6x' spin theme='danger'></Icon>
            <FontAwesomeIcon icon='coffee' size='4x'/>
            <FontAwesomeIcon icon='school' size='4x'/>
            <h5 style={style}>button component</h5>
            <Button onClick={() => alert('测试点击事件成功!')} className='测试自定义类名'>默认按钮</Button>
            <Button disabled>禁用默认按钮</Button>
            <Button btnType='primary' size='lg'>Primary按钮</Button>
            <Button btnType='link' href='https://baidu.com'>链接按钮</Button>
            <Button btnType='link' href='https://baidu.com' disabled>链接禁用按钮</Button>
            <hr/>
            <h5 style={style}>menu-component</h5>

            <Menu
                defaultIndex='3'
                onSelect={(index) => alert(index)}
                mode='horizontal'
                defaultOpenSubMenus={['3']}
            >
                <MenuItem>
                    one
                </MenuItem>
                <MenuItem disabled>
                    two
                </MenuItem>
                <MenuItem>
                    three
                </MenuItem>
                <SubMenu title='下拉菜单'>
                    <MenuItem>111</MenuItem>
                    <MenuItem>222</MenuItem>
                    <MenuItem>333</MenuItem>
                </SubMenu>
            </Menu>
            <hr/>
            <h5 style={style}>upload-component</h5>
            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                name="fileName"
                multiple
                drag
                onProgress={() => {
                }}
            >
                <Icon icon="upload" size="8x" theme="secondary"/>
            </Upload>
            {/*<Progress percent={80}></Progress>*/}
            <hr/>
            <h5 style={style}>Input-component</h5>
            <Input prepend='https://' append='.com' placeholder='请输入内容:'/>
            <Input disabled placeholder='禁止输入'/>
            <Input size='lg' placeholder='大输入框'/>
            <Input size='sm' placeholder='小输入框'/>
            <Input placeholder='带图标的输入框' icon='school'/>
            <hr/>
            <h5 style={style}>autoComplete-component</h5>
            <AutoComplete fetchSuggestions={handleFetch}></AutoComplete>

        </div>
    );
}

export default App;
