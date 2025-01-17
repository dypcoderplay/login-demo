import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const Login = () => {
	const onFinish = (values) => {
		console.log('Received values:', values);
	};

	return (
		<Form
			name="login-form"
			initialValues={{ remember: true }}
			onFinish={onFinish}
		>
			<Form.Item
				label="Username"
				name="username"
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Password"
				name="password"
				rules={[{ required: true, message: 'Please input your password!' }]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item name="remember" valuePropName="checked">
				<Checkbox>Remember me</Checkbox>
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit">
					Login
				</Button>
				<Button type="link">Register</Button>
			</Form.Item>
		</Form>
	);
};

export default Login;