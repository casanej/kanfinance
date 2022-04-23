/* eslint-disable prefer-destructuring */
export const commarize = (normalValue: number, min = 1e3, format = 'text') => {
    if (normalValue >= min) {
        const units = ['k', 'M', 'B', 'T']

        const order = Math.floor(Math.log(normalValue) / Math.log(1000))

        const unitname = units[order - 1]
        const num = normalValue / 1000 ** order

        if (format === 'money') {
            const numFormatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 }).format(parseFloat(num.toFixed(2)))
            return `${numFormatted} ${unitname}`
        }

        return `${num.toFixed(2)} ${unitname}`
    }

    if (typeof normalValue === 'number' && normalValue % 1 !== 0) {
        return [
            new Intl.NumberFormat('pt-BR', {
                maximumSignificantDigits: 4,
            }).format(normalValue),
        ]
    }

    return [normalValue]
}

export const getFormattedColumns = (columns: any) => {
    return columns.map(
        ({ title, field, tooltip, tooltipArticle, render, fixed }: any) => ({
            Header: title,
            accessor: field,
            checked: true,
            isSortable: field !== 'info' && field !== 'actions',
            tooltip,
            tooltipArticle,
            type: render ? render.type : null,
            renderProps: render,
            fixed,
        })
    )
}

export const getFormattedRows = (rows: any) =>
    rows.map((row: any) => {
        return Object.keys(row).reduce((prev, current) => {
            return {
                ...prev,
                [current]: [row[current].value, row[current].value_fmt],
            }
        }, {})
    })

export const handleTableFilter = ({ searchedValue, data, setFilteredData }: any) => {
    if (!searchedValue) {
        return setFilteredData(data)
    }

    const newData = data.filter((row: any) =>
        Object.values(row).find((propValue: any) => {
            let value = propValue

            // Check if it's is a array
            if (Array.isArray(value)) {
                value = propValue[0]

                return String(value).toLowerCase().includes(searchedValue.toLowerCase())
            }

            // Check if it's is already a value
            if (typeof propValue !== 'object') {
                value = propValue

                return String(value).toLowerCase().includes(searchedValue.toLowerCase())
            }

            // Check if it has info field
            if (value.props?.information) {
                return false
            }

            // Check if it's array inside React element
            let valueInReactElement = value.props.children[2]
            if (Array.isArray(valueInReactElement)) {
                valueInReactElement = value.props.children[2][1]
            }

            return String(valueInReactElement)
                .toLowerCase()
                .includes(searchedValue.toLowerCase())
        })
    )

    return setFilteredData(newData)
}
