import { createPages } from "../../utils/pagesCreator";
import { Preloader } from "../ui/Preloader/Preloader";
import styles from "./Friends.module.css";
import { User } from "./User";

export let Friends = (props) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  //let pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
 let pages = []
  console.log(pages);
   createPages(pages, pagesCount, props.currentPage)
//   console.log(createPages(pages, pagesCount, props.currentPage))
const usersList = props.users.map((u) => (
  <User
    key={u.id}
    id={u.id}
    followed={u.followed}
    name={u.name}
    status={u.status}
    location={u.location}
    photos={u.photos}
    followingInProgress={props.followingInProgress}
    followUser={props.followUser}
    unfollowUser={props.unfollowUser}
  />
))
  return (
    <div>
      {/* <Button text={"Загрузить пользователей"} onClick={this.getUsers()} /> */}
      <div className={styles.friends__wrapper}>
        <div className={styles.pages}>
          {pages.map((p, index) => {
            return (
              <button
                key={index}
                className={
                  props.currentPage === p
                    ? styles.page_selected
                    : styles.page
                }
                onClick={() => {
                  props.onPageChange(p);
                }}
              >
                {p}
              </button>
            );
          })}
        </div>
        {props.isFetching ? <Preloader/>  : usersList}
        
      </div>
    </div>
  );
};
