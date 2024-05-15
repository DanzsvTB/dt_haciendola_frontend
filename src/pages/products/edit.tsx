import { Edit, useForm, useSelect } from '@refinedev/antd';
import MDEditor from '@uiw/react-md-editor';
import { Form, Input, Select } from 'antd';

export const ProductEdit = () => {
  const { formProps, saveButtonProps, queryResult, formLoading } = useForm({});

  const blogPostsData = queryResult?.data?.data;

  const { selectProps: categorySelectProps } = useSelect({
    resource: 'categories',
    defaultValue: blogPostsData?.category?.id,
    queryOptions: {
      enabled: !!blogPostsData?.category?.id,
    },
  });

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
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
          initialValue={formProps?.initialValues?.category?.id}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...categorySelectProps} />
        </Form.Item>
        <Form.Item
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
    </Edit>
  );
};
