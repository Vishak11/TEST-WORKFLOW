import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from "react-i18next";
import MonitorViewModel from './monitorsViewModel'
import * as actionCreators from '../../models/actions/actionCreators';
import {
    withStyles
} from '@material-ui/core';
let currentLanguage = localStorage.getItem("lang");
if (currentLanguage === "null" || currentLanguage === null) {
    currentLanguage = "en"
}
const styles = theme => ({
})
class MonitorView extends Component {
     
    navigateToEntityView = (data, entity, id = null) => {
        let pathname = this.props.location.pathname;
        let details = data

        switch (entity) {
            case "MonitorsEntity": this.props.history.push({
                pathname: `${pathname}${id !== null ? `/monitorsEntity/${id}` : "/monitorsEntity"}`,
                details
            });
                break;
            case "MonitorsTable": this.props.history.push("/monitors")
                break;
            default: console.log("default case");
        }
    }

    render() {

        return (
            <>
                <MonitorViewModel navigateToEntityView={this.navigateToEntityView} />
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        userData: state.userDataReducer,
        loaderState: state.loaderReducer,
        appData: state.appReducer,
        config: state.viewDefinitionReducer.config,
        alertMessage: state.alertMessageReducer,
        staticData: state.staticDataReducer


    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAppData: (language) => (dispatch(actionCreators.getAppData(language))),
        isUserAuthenticated: () => (dispatch(actionCreators.isUserAuthenticated())),
        setLoaderState: () => (dispatch(actionCreators.setLoaderState())),
        updateSelectedTab: (selectedTab) => (dispatch(actionCreators.updateSelectedTab(selectedTab))),
        getViewDefinition: (language) => (dispatch(actionCreators.getViewDefinition(language))),
        getStaticData: () => (dispatch(actionCreators.getStaticData())),
        saveParentOrganization: (id, type) => (dispatch(actionCreators.saveParentOrganization(id, type))),
        updateScopeSelector: (selection, tab, permission, scope, plantName) => (dispatch(actionCreators.updateScopeSelector(selection, tab, permission, scope, plantName))),

    }
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MonitorView)));
