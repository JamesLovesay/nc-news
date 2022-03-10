export default function getHumanTime (created_at) {
        let date = String(new Date(created_at))
        const dateRegex = date.replace(/ GMT.*/, '')
        return dateRegex;
    }