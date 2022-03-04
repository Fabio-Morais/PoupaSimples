// material-ui
import { DataGrid } from '@mui/x-data-grid';

// Column configuration
import getColumn from './Helpers/getColumnsConfiguration';

// TODO - On click do something....
const handleOnCellClick = (params) => {
    if (params.field !== 'action') console.log(params);
};

/**
 * @param rows - {id, name, image, price, var, holding, avg, profit}
 * @param currency - € or $
 * */
function DataGridWallet({ rows, currency }) {
    return (
        <DataGrid
            rows={rows}
            columns={getColumn(currency)}
            rowsPerPageOptions={[]}
            autoHeight
            disableColumnFilter
            disableColumnMenu
            disableSelectionOnClick
            hideFooter
            rowHeight={65}
            onCellClick={handleOnCellClick}
        />
    );
}

export default DataGridWallet;
