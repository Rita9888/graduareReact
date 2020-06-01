import React from "react";


export default function Input(props) {
    const classNamesProps = [
        'form-control',
        'ng-untouched',
        'ng-pristine',
        'ng-valid',
        ...props.className

    ];


    return <fieldset className="form-group">
                <input
                    className={classNamesProps.join(' ')}
                    placeholder={props.placeholder}
                    type={(props.type) ? props.type : 'text'}
                    name={(props.name) ? props.name : 'defaultName' + Math.random() * (100 - 1) + 1}
                    value={(props.value) ? props.value : ''}
                    onChange={(event) => {
                        let value = event.target.value;
                        if (props.validator) {
                            value = props.validator(value);
                        }
                        props.handler(value)
                    }}
                />
            </fieldset>;
}
