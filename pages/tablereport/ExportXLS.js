import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import {Button} from 'antd';
import { DownloadOutlined } from '@ant-design/icons'

export const ExportXLS = ({csvData, fileName}) => {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = (csvData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    return (
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size='large' onClick={(e) => exportToCSV(csvData,fileName)} style={{backgroundColor: '#1D6F42'}}>Excel</Button>
    )
}