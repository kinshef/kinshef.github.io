import cn from "classnames";

const Answer = ({title, parentId, answer, parentIds, id, stepIds, setStepIds}) => {
    console.log(title, parentId, id, stepIds, parentIds)
    let indexArrStep = stepIds.indexOf(parentId);
    let newIds = [...parentIds, id];
    return (
        <div className={cn('item', {
            'active': indexArrStep > -1 && parentIds.toString() === stepIds.toString(),
            'back': indexArrStep > -1 && stepIds.slice(0, newIds.length).toString() === newIds.toString()
        })}>
            <div className="item-title">{title}</div>
            <div className="item">
                <div className="item-title">{title}</div>
                <div className="answer-answer">{answer}</div>
            </div>
        </div>
    )
}
export default Answer