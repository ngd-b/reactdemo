/**
 * less 使用示例
 */
import React from 'react';
import "./index.less";

export default function(){

    return (<div className="less-box less-box-less">
            <p className="item">使用变量标识符`@`</p>
            <p className="item less-box">混合，属性复用
                <span className="item">内部嵌套，使用`&&`</span>
            </p>
            <p className="less-box-item">`&` 可作为字符串拼接使用</p>
            <p className="less-box">
                <p>多次使用`&`，多层嵌套</p>
            </p>
            <p>将其他的选择样式复用至当前选择中
                <span>内部嵌套子元素</span>
            </p>
            <p>merge 聚合属性，比如背景、动画等</p>
            <p>Mixin 内部嵌套混合复用样式</p>
            <p>Mixin 带参数处理，传入自定义属性值</p>
            
        </div>);
}