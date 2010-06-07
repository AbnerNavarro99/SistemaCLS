import React from 'react';
import { DatePicker, TimePicker } from 'react-materialize';

export default function DatePickerAdmin(props) {
    return (
        <DatePicker
            id={props.id}
            options={{
                autoClose: false,
                container: null,
                defaultDate: null,
                disableDayFn: null,
                disableWeekends: false,
                events: [],
                firstDay: 0,
                format: 'dd mmm, yyyy',
                i18n: {
                    cancel: 'Cancel',
                    clear: 'Clear',
                    done: 'Ok',
                    months: [
                        'Enero',
                        'Febrero',
                        'Marzo',
                        'Abril',
                        'Mayo',
                        'Junio',
                        'Julio',
                        'Agosto',
                        'Septiembre',
                        'Octubre',
                        'Noviembre',
                        'Diciembre'
                    ],
                    monthsShort: [
                        'Ene',
                        'Feb',
                        'Mar',
                        'Abr',
                        'May',
                        'Jun',
                        'Jul',
                        'Ago',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dic'
                    ],
                    nextMonth: '›',
                    previousMonth: '‹',
                    weekdays: [
                        'Sunday',
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday'
                    ],
                    weekdaysAbbrev: [
                        'D',
                        'L',
                        'M',
                        'M',
                        'J',
                        'V',
                        'S'
                    ],
                    weekdaysShort: [
                        'Dom',
                        'Lun',
                        'Mar',
                        'Miér',
                        'Jue',
                        'Vie',
                        'Sab'
                    ]
                },
                isRTL: false,
                maxDate: null,
                minDate: null,
                onClose: null,
                onDraw: null,
                onOpen: null,
                onSelect: props.onSelect,
                parse: null,
                setDefaultDate: false,
                showClearBtn: false,
                showDaysInNextAndPreviousMonths: false,
                showMonthAfterYear: false,
                yearRange: 10
            }}
        />
    )
}


export function TimePickerAdmin(props) {
    return (
        <TimePicker
            id={props.id}
            options={{
                autoClose: false,
                container: null,
                defaultTime: 'now',
                duration: 350,
                fromNow: 0,
                i18n: {
                    cancel: 'Cancel',
                    clear: 'Clear',
                    done: 'Ok'
                },
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                onSelect: null,
                showClearBtn: false,
                twelveHour: true,
                vibrate: true
            }}
        />
    )
}
