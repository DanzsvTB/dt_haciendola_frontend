import { Create, useForm, useSelect } from '@refinedev/antd';
import MDEditor from '@uiw/react-md-editor';
import { Form, Input, Select } from 'antd';

export const ProductCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  //   const { selectProps: categorySelectProps } = useSelect({
  //     resource: 'categories',
  //   });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={'Title'}
          name={['title']}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={'Handle'}
          name={['handle']}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={'Description'}
          name="description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <MDEditor data-color-mode="light" />
        </Form.Item>
        <Form.Item
          label={'SKU'}
          name={['sku']}
          rules={[
            {
              pattern: /^[0-9]+$/,
              message: 'Only numbers',
            },
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={'Grams'}
          name={['grams']}
          rules={[
            {
              max: 6,
            },
            {
              pattern: /^[0-9]+$/,
              message: 'Only numbers',
            },

            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={'Stock'}
          name={['stock']}
          rules={[
            {
              pattern: /^[0-9]+$/,
              message: 'Only numbers',
            },
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={'Price'}
          name={['price']}
          rules={[
            {
              pattern: /^[0-9]+$/,
              message: 'Only numbers',
            },
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={'Compare Price'}
          name={['comparePrice']}
          rules={[
            {
              pattern: /^[0-9]+$/,
              message: 'Only numbers',
            },
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={'BarCode'}
          name={['barcode']}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* <Form.Item
          label={'Category'}
          name={['category', 'id']}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...categorySelectProps} />
        </Form.Item> */}
        {/* <Form.Item
          label={'Status'}
          name={['status']}
          initialValue={'draft'}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            defaultValue={'draft'}
            options={[
              { value: 'draft', label: 'Draft' },
              { value: 'published', label: 'Published' },
              { value: 'rejected', label: 'Rejected' },
            ]}
            style={{ width: 120 }}
          />
        </Form.Item> */}
      </Form>
    </Create>
  );
};
