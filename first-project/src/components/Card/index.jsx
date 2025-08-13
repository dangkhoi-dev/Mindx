import './styles.css'
import { Card as AntCard, Flex, Typography } from 'antd'
import { FileOutlined, FlagOutlined, ClockCircleOutlined } from '@ant-design/icons'

const MyCard = (props) => {
    const { listItem } = props
    return (
        <AntCard type='inner'
        actions={
            [<FileOutlined cursor='pointer'/>,
            <FlagOutlined cursor='pointer'/>,
            <ClockCircleOutlined cursor='pointer'/>]
        }>
            <div>
                {listItem.title}
            </div>
            <div>
                {listItem.content}
            </div>
            <div>
                {listItem.author}
            </div>
        </AntCard>
    )
}



export default MyCard