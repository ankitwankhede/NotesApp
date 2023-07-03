import { add_circle, edit } from "../assets"

export default function Note() {
    return <div style={{ width: 250, height: 150, borderRadius: 15, borderColor: 'white', borderWidth: 1, padding: 20, borderStyle: 'solid', margin: 10, opacity: 0.315, backgroundColor: 'white' }}>
        <div className="note_header" style={{ backgroundColor: 'red' }}>
            <h5>Header</h5>
        </div>
        <div className="note_body" style={{ backgroundColor: 'color' }}>
            <h5>note</h5>
        </div>
        <div className="note_options" style={{ width: '100%', display: 'flex', flexDirection: 'row-reverse' }}>
            <img src={edit} />
            <img src={add_circle} />
        </div>
    </div>
}