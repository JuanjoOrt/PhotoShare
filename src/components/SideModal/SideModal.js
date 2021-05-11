import './SideModal.css'

export default function SideModal({visible}){
    const visibleClass = visible ? 'sidebar-visible' : 'sidebar-novisible';

    return (
        <div className={`sidebar ${visibleClass} sm:hidden`}> 
            asd
        </div>
    )
}