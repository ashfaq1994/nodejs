const data = {
    "name": "SequelizeValidationError",
    "errors": [
        {
            "message": "Email is required",
            "type": "Validation error",
            "path": "title",
            "value": "tricksfree",
            "origin": "FUNCTION",
            "instance": {
                "id": null,
                "title": "tricksfree",
                "decription": "New first NAme",
                "model": "New first NAme",
                "company_id": 64,
                "updatedAt": "2019-11-08T09:14:31.995Z",
                "createdAt": "2019-11-08T09:14:31.995Z"
            },
            "validatorKey": "isEmail",
            "validatorName": "isEmail",
            "validatorArgs": [
                {
                    "msg": "Email is required",
                    "allow_display_name": false,
                    "require_display_name": false,
                    "allow_utf8_local_part": true,
                    "require_tld": true
                }
            ],
            "original": {
                "validatorName": "isEmail",
                "validatorArgs": [
                    {
                        "msg": "Email is required",
                        "allow_display_name": false,
                        "require_display_name": false,
                        "allow_utf8_local_part": true,
                        "require_tld": true
                    }
                ]
            }
        },
        {
            "message": "Numeric is required",
            "type": "Validation error",
            "path": "model",
            "value": "New first NAme",
            "origin": "FUNCTION",
            "instance": {
                "id": null,
                "title": "tricksfree",
                "decription": "New first NAme",
                "model": "New first NAme",
                "company_id": 64,
                "updatedAt": "2019-11-08T09:14:31.995Z",
                "createdAt": "2019-11-08T09:14:31.995Z"
            },
            "validatorKey": "isNumeric",
            "validatorName": "isNumeric",
            "validatorArgs": [
                {
                    "msg": "Numeric is required"
                }
            ],
            "original": {
                "validatorName": "isNumeric",
                "validatorArgs": [
                    {
                        "msg": "Numeric is required"
                    }
                ]
            }
        }
    ]
};


Object.values(data.errors).map(el => {
    console.log(el.message);
});

// console.log(result);
