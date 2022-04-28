import { useEffect } from "react"
import Comment from "../assets/svg/comment"
import Heart from "../assets/svg/heart"
import MoreHorizontal from "../assets/svg/moreHorizontal"
import Share from "../assets/svg/share"
import BearishFilled from "./buttons/bearishFilled"
import BullishFilled from "./buttons/bullishFilled"
import Image from "next/image"

const styles = {
    postAction: `flex items-center`,
    chatCard: `border-b border-gray-700 pb-6 mb-6`,
    chatCardWrapper: `flex items-center justify-between`,
    flexCenter: `flex items-center`,
    greyText: `text-gray-400 ml-2`,
    grey400: `text-gray-400`,
    flexBetween: `flex justify-between`,
    messageContent: `my-4 mt-2`,
    labelsContainer: `flex w-full ml-3`,
}

const ChatCard = ({ content = '', timestamp, sender, bullish, senderAvatar, likes, comments }) => {

    return <div className={styles.chatCard}>
        <div className={styles.chatCardWrapper}>
            <div className={styles.flexCenter}>
                <div>
                    <Image width={40} height={40} src={senderAvatar} className="rounded-full" alt='' />
                </div>
                <div className={styles.labelsContainer}>
                    {sender}
                    &nbsp; • &nbsp;
                    <span className={styles.grey400}>{timestamp}</span>
                    &nbsp; • &nbsp;
                    {bullish ? <BullishFilled /> : <BearishFilled />}
                </div>
            </div>

            <MoreHorizontal />
        </div>

        <p className={styles.messageContent}>{content}</p>

        <div className={styles.flexBetween}>
            <div className={styles.postAction}>
                <Comment />
                <p className={styles.greyText}>{comments}</p>
            </div>

            <div className={styles.postAction}>
                <Heart />
                <p className={styles.greyText}>{likes}</p>
            </div>

            <div className={styles.postAction}>
                <Share />
                <p className={styles.greyText}>Share</p>
            </div>
        </div>
    </div>
}

export default ChatCard