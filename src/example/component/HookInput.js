/**
 * form 测试例子
 */
import React, { useState, useEffect } from 'react';
import {Form, Input, Row,Col} from 'antd';

function Parent(){
    let [name,setName] = useState();
    return (<div>
            <Row gutter={[20,20]}>
                <Col span={24}>
                    <ChildForm name={name} />
                </Col>
                <Col span={24}>
                    <label>外部输入：</label>
                    <input value={name} onChange={e=>setName(e.target.value)} />
                </Col>
            </Row>
        </div>);
}

function ChildForm(props){
    let [form] = Form.useForm();
    useEffect(()=>{
        form.setFieldsValue({
            name:props.name
        });
    },[props.name])
    return (<Form form = {form} initialValues={{
        name:"admin"
    }}>
            <Form.Item name="name" label="来自父组件">
                <Input />
            </Form.Item>
        </Form>)
}

export default Parent;