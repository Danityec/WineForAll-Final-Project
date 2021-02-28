import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function UserList(props) {
    const manufactureList = (item) => {



        const eachItem = (item) => {
            return (
                <>
                    {manufactureList(item)}
                </>
            )
        }
        return (
            <div>
                <DataGrid>
                    {props.manufactureList.map(eachItem)}
                </DataGrid>
            </div>
        )
    }
}