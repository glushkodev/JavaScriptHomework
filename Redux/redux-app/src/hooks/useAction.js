import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../store/actionCreators";

export const userAction = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}