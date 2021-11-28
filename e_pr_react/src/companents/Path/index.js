import cn from 'classnames';

const Path = ({title, parentId, parentIds, description, id, path, stepIds, setStepIds, answer}) => {
    let indexArrStep = stepIds.indexOf(parentId);
    let newIds = [...parentIds, id];
    return (
        <div onClick={e => {
            setStepIds(newIds);
            e.stopPropagation();
        }} className={cn('item', {
            'active': indexArrStep > -1 && parentIds.toString() === stepIds.toString(),
            'back': indexArrStep > -1 && stepIds.slice(0, newIds.length).toString() === newIds.toString()
        })}>
            <div className="item-title">{title}</div>
            {description && !(answer && newIds.toString() === stepIds.toString()) ? <div className="item-description">{description}</div> : null}
            {path?.map((item, index) => <Path stepIds={stepIds} setStepIds={setStepIds} parentId={id} parentIds={[...parentIds, id]} key={index} {...item} />)}
            {answer && newIds.toString() === stepIds.toString() ? <div dangerouslySetInnerHTML={{ __html: answer}} /> : null}
        </div>
    )
}
export default Path