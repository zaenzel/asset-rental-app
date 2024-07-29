import { Button, DateRangePicker } from '@nextui-org/react'
import { parseAbsoluteToLocal, today, getLocalTimeZone } from "@internationalized/date";
import { GrLinkNext } from "react-icons/gr";

type PropsType = {
    currentDateTime: string
    futureDateTime: string
    onDateChange: (dateRange : any) => void
    handleDateChange: () => void
}

const SelectDate = ({
    currentDateTime,
    futureDateTime,
    onDateChange,
    handleDateChange,
}: PropsType) => {
    return (
        <form className='flex flex-col gap-y-5 w-full'>
            <DateRangePicker
                variant='underlined'
                label="Select Date"
                isRequired
                className=" overflow-scroll sm:overflow-hidden"
                hideTimeZone
                minValue={today(getLocalTimeZone())}
                defaultValue={{
                    start: parseAbsoluteToLocal(currentDateTime),
                    end: parseAbsoluteToLocal(futureDateTime),
                }}
                onChange={e => onDateChange(e)}
                calendarProps={{
                    classNames: {
                        prevButton: "border-1 border-default-200 rounded-small",
                        nextButton: "border-1 border-default-200 rounded-small",
                    }
                }}
            />
            <Button
                onPress={handleDateChange}
                variant='bordered'
                color='primary'
                className='self-end'>
                <GrLinkNext />
            </Button>
        </form>
    )
}

export default SelectDate