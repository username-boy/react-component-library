# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### 安装方法如下所示


 `npm install lx-sun`


### 使用方法
#### 第一步：在index.tsx中导入样式文件
```js
import 'lx-sun/dist/index.css';
```
#### 第二步 ：在需要使用的页面导入相应的模块并使用,例如在app.tsx中使用
```js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "lx-sun";
import {Menu} from "lx-sun";
import {Upload} from "lx-sun";
import {Input} from "lx-sun";
import {Icon} from "lx-sun";
import {AutoComplete} from "lx-sun";

function App() {
    const handleFetch = (query: string) => {return fetch(`https://api.github.com/search/users?q=${query}`).then(res => res.json()).then(({items}) => {console.log(items)
        return items.slice(0, 10).map((item: any) => ({value: item.login, ...item}))
    })
    }
    return (<div className="App"><Button btnType='primary' size='lg'>lx-sun</Button><Input></Input><Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" name="fileName" multiple drag onProgress={() => {
    }}><Icon icon="upload" size="8x" theme="secondary"/>
    </Upload><AutoComplete fetchSuggestions={handleFetch}></AutoComplete>
            <Menu
                defaultIndex='3'
                onSelect={(index) => alert(index)}
                mode='horizontal'
                defaultOpenSubMenus={['3']}
            >
                <Menu.Item>
                    one
                </Menu.Item>
                <Menu.Item disabled>
                    two
                </Menu.Item>
                <Menu.Item>
                    three
                </Menu.Item>
                <Menu.SubMenu title='下拉菜单'>
                    <Menu.Item>111</Menu.Item>
                    <Menu.Item>222</Menu.Item>
                    <Menu.Item>333</Menu.Item>
                </Menu.SubMenu>
            </Menu>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
    </div>
    );
}
export default App;
```
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
