import {
  DateField,
  MarkdownField,
  NumberField,
  Show,
  TextField,
} from '@refinedev/antd';
import { useOne, useShow } from '@refinedev/core';
import { Typography } from 'antd';

const { Title } = Typography;

export const ProductShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;
  const MarkdownColumn: React.FC<{ value: string }> = ({ value }) => {
    return <div dangerouslySetInnerHTML={{ __html: value }} />;
  };
  //   const { data: categoryData, isLoading: categoryIsLoading } = useOne({
  //     resource: 'categories',
  //     id: record?.category?.id || '',
  //     queryOptions: {
  //       enabled: !!record,
  //     },
  //   });

  return (
    <Show isLoading={isLoading}>
      <Title level={4}>{'ID'}</Title>
      <NumberField value={record?.id ?? ''} />
      <Title level={4}>{'Title'}</Title>
      <TextField value={record?.title} />
      <Title level={4}>{'Handle'}</Title>
      <TextField value={record?.handle} />
      <Title level={4}>{'Description'}</Title>
      <MarkdownColumn value={record?.description} />
      <br></br>
      <Title level={4}>{'SKU'}</Title>
      <TextField value={record?.sku} />
      <Title level={4}>{'Grams'}</Title>
      <TextField value={record?.grams} />
      <Title level={4}>{'Stock'}</Title>
      <TextField value={record?.stock} />
      <Title level={4}>{'Price'}</Title>
      <TextField value={record?.price} />
      <Title level={4}>{'Compare Price'}</Title>
      <TextField value={record?.comparePrice} />
      <Title level={4}>{'Bar Code'}</Title>
      <TextField value={record?.barcode} />
      {/* <Title level={5}>{'Category'}</Title>
      <TextField
        value={
          categoryIsLoading ? <>Loading...</> : <>{categoryData?.data?.title}</>
        }
      /> */}

      {/* <Title level={5}>{'Status'}</Title>
      <TextField value={record?.status} /> */}
      <Title level={5}>{'CreatedAt'}</Title>
      <DateField value={record?.createdAt} />
    </Show>
  );
};
