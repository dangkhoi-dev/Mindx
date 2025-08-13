import { useState } from "react"
import MyCard from "../Card"
import './styles.css'
import { UserOutlined, PlusOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Flex, Input, Button, Segmented, Typography, Badge, Card as AntCard, Modal } from 'antd';


const Container = () => {
    const [list, setList] = useState([])
    const [newItem, setNewItem] = useState({
        title: '',
        content: '',
        author: ''
    })

    const addItemFn = () => {
        if (newItem.title.trim() !== '') {
            setList([...list, newItem])
            setNewItem({
                title: '',
                content: '',
                author: ''
            })
        }
    }
    const onChangeFn = (e) => {
        const value = e.target.value
        const name = e.target.name
        setIsError({
            ...isError,
            [name]: value.trim() === ''
        })
        const updatedNewItem = {
            ...newItem,
            [name]: value
        }
        setNewItem(updatedNewItem)
    }
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleOk = () => {
        addItemFn()
        setIsModalOpen(false)
        loading()
    }
    
    const [isLoading, setIsLoading] = useState(false)

    const loading = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }

    const [isError, setIsError] = useState({
        title: false,
        content: false,
        author: false
    })



    return (
        <>
        <AntCard 
        loading={isLoading}
        styles={{width: '300px'}}
        title
        ={
        <Flex>
            <Typography.Paragraph>To do</Typography.Paragraph>
            <Badge count={list.length} size="small"></Badge>
        </Flex>}
        extra={
        <Flex>
            <Button type="text" size="small" shape="circle" icon={<PlusOutlined />} onClick={showModal}/>
            <Button type="text" size="small" shape="circle" variant="outlined" icon={<EllipsisOutlined />} />
        </Flex>} 
        style={{ width: 300 }}>
            {
                list.map((listItem, index) => <MyCard key={index} listItem={listItem} />)
            }
        </AntCard>
        <Modal
            title="Add Item"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={() => setIsModalOpen(false)}
        >
            <Input size="small" placeholder="title" name='title' value={newItem.title} onChange={onChangeFn} prefix={<UserOutlined />} />
            <Input size="small" placeholder="content" name='content' value={newItem.content} onChange={onChangeFn} prefix={<UserOutlined />} />
            <Input size="small" placeholder="author" name='author' value={newItem.author} onChange={onChangeFn} prefix={<UserOutlined />} />
            <Flex flexDirection='column' gap={10}>
            <Typography.Text type="danger">{isError.title ? 'Title is required' : ''}</Typography.Text>
            <Typography.Text type="danger">{isError.content ? 'Content is required' : ''}</Typography.Text>
            <Typography.Text type="danger">{isError.author ? 'Author is required' : ''}</Typography.Text>
            </Flex>
        </Modal>
        </>
    )
}

export default Container