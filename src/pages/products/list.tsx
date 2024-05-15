import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
  useTable,
} from '@refinedev/antd';
import { BaseRecord, useMany } from '@refinedev/core';
import { Space, Table } from 'antd';
import { useEffect } from 'react';

export const ProductList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });
  const MarkdownColumn: React.FC<{ value: string }> = ({ value }) => {
    return <div dangerouslySetInnerHTML={{ __html: value }} />;
  };

  useEffect(() => {
    if (!tableProps) {
    }
  }, []);
  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={'ID'} />
        <Table.Column dataIndex="title" title={'Title'} />
        <Table.Column
          dataIndex="description"
          title={'Description'}
          render={(value: any) => {
            if (!value) return '-';
            return <MarkdownColumn value={value} />;
          }}
        />
        <Table.Column dataIndex="sku" title={'SKU'} />
        <Table.Column dataIndex="stock" title={'Stock'} />
        <Table.Column dataIndex="price" title={'Price'} />

        <Table.Column
          title={'Actions'}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
