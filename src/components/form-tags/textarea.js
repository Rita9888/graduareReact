import React from "react";


export default function Textarea(props) {
    const classNamesProps = [
        'form-control',
        'ng-untouched',
        'ng-pristine',
        'ng-valid',
        ...props.className

    ];


    return <fieldset className="form-group">
                <textarea
                    className={classNamesProps.join(' ')}
                    placeholder={props.placeholder}
                    name={(props.name) ? props.name : 'defaultName' + Math.random() * (100 - 1) + 1}
                    rows={(props.rows) ? props.rows : '8'}
                    defaultValue={(props.value) ? props.value : ''}
                    onChange={(event) => {
                        let value = event.target.value;
                        if (props.validator) {
                            value = props.validator(value);
                        }
                        props.handler(value)
                    }}
                >
                </textarea>
            </fieldset>;
}
