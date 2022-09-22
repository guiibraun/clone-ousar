
interface Props {
    error: string
}

export const InputError = ({ error }: Props) => {
    return (
        <span className="text-sm text-red">
            O campo {error} é obrigatório.
        </span>
    )
}