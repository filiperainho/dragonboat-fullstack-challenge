import React from "react";
import PropTypes from "prop-types";

import BaseDivider from "../../components/BaseDivider";
import BaseIconButton from "../../components/BaseIconButton";
import {
  BaseListItem,
  BaseListItemSecondaryAction,
  BaseListItemText
} from "../../components/BaseList"

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const ProjectTile = (props) => {
  const {
    project,
    withDivider,
    onEdit,
    onDelete,
  } = props;

  const parseDateToLocale = (date) => new Date(date).toLocaleDateString();

  const projectDetailStr = `${project.author} | ${parseDateToLocale(project.start_date)} - ${parseDateToLocale(project.end_date)}`;
  const isActionsVisible = onEdit || onDelete;

  return (
    <div>
      <BaseListItem>
        <BaseListItemText
          primary={project.title}
          secondary={projectDetailStr} />
        { isActionsVisible &&
          <BaseListItemSecondaryAction>
            { onEdit &&
              <BaseIconButton
                edge="end"
                onClick={() => onEdit(project.id)} >
                <EditIcon />
              </BaseIconButton>
            }
            { onDelete &&
              <BaseIconButton
                edge="end" 
                onClick={() => onDelete(project.id)} >
                <DeleteIcon />
              </BaseIconButton>
            }
          </BaseListItemSecondaryAction>
        }
      </BaseListItem>

      { withDivider && <BaseDivider /> }
    </div>
  );
};

ProjectTile.propTypes = {
  project: PropTypes.object.isRequired,
  withDivider: PropTypes.bool,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

ProjectTile.defaultProps = {
  withDivider: true,
};

export default ProjectTile;
