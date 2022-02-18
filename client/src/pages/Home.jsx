import {ConfigProvider, DatePicker, Form, Input, message, Typography} from "antd";
import {useState} from 'react'

const Profile = () => {
    const [formRef] = Form.useForm();

    const [date, setDate] = useState(null);
    const handleChange = value => {
        message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
        setDate(value);
    };


    return (
        <>
            <h1>Profile</h1>

            <Form form={formRef}>
                <Form.Item name='binId' label='BIN_ID'>
                    <Input/>
                </Form.Item>
                <Form.Item
                    name='name'
                    label='用户名'
                    extra={
                        <Typography.Text type='secondary'>默认使用云端用户名，如果没有用户名会根据当前值创建。</Typography.Text>
                    }
                >
                    <Input/>
                </Form.Item>
            </Form>


            <ConfigProvider>
                <div style={{width: 400, margin: '100px auto'}}>
                    <DatePicker onChange={handleChange}/>
                    <div style={{marginTop: 16}}>
                        当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
                    </div>
                </div>
            </ConfigProvider>
        </>
    )
}

export default Profile;
