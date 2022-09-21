import errors from '../../utils/errors.json'

interface Props {
    type: string,
    field: string
}

export const InputError = ({ type, field }: Props) => {
    //@ts-expect-error
    return (
        <span className="text-sm text-red">
            {errors[field][type]}
        </span>
    )
}