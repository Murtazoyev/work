import React, { Component } from "react";
import { Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";

class App extends Component {
  state = {
    tasks: [
      {
        title: "task1",
        status: "open",
        isActive: false,
      },
      {
        title: "task2",
        status: "pending",
        isActive: false,
      },
      {
        title: "task3",
        status: "inprog",
        isActive: false,
      },
      {
        title: "task4",
        status: "complete",
        isActive: false,
      },
    ],
    openModal: false,
    openModal2: false,
  };
  openModal = () => {
    this.setState({
      openModal: !this.state.openModal,
    });
  };
  addTasks = (event) => {
    event.preventDefault();
    let title = event.target[0].value;
    let status = event.target[1].value;
    let tasks = this.state.tasks;
    tasks.push({ id: tasks.length, title, status });
    this.setState({
      tasks: tasks,
    });
  };

  handleValue = (event) => {
    let tasks = this.state.tasks;
    tasks.map((item, index) => {
      if (item.title === event.target.value) {
        item.isActive = event.target.checked;
      }
    });
    this.setState({
      tasks: tasks,
    });
  };

  deleteBtn = () => {
    let a = this.state.tasks;
    a.map((item, index) => {
      if (item.isActive === true) {
        delete a[index];
      }
    });
    this.setState({
      tasks: a,
    });
  };
  editBtn = (event) => {
    event.preventDefault();
    let a = this.state.tasks;
    let status = event.target[1].value;
    a.map((item, index) => {
      if (item.isActive === true) {
        item.status = status;
        item.isActive = false;
      }
    });
    this.setState({
      tasks: a,
    });
  };
  openModal2 = () => {
    this.setState({
      openModal2: !this.state.openModal2,
    });
  };
  render() {
    const { tasks } = this.state;
    return (
      <div className={"container-fluid"}>
        <Modal isOpen={this.state.openModal} toggle={this.openModal}>
          <ModalHeader>add tasks</ModalHeader>
          <ModalBody>
            <form id={"myForm"} onSubmit={this.addTasks}>
              Title
              <input type="text" className={"form-control"} />
              Status
              <select className={"form-control mt-2"}>
                <option value="open">open</option>
                <option value="pending">pending</option>
                <option value="inprog">inprog</option>
                <option value="complete">complete</option>
              </select>
            </form>
          </ModalBody>
          <ModalFooter>
            <button className={"btn btn-success"} form={"myForm"}>
              save
            </button>
            <button className={"btn btn-warning"} onClick={this.openModal}>
              cancel
            </button>
          </ModalFooter>
        </Modal>
        {this.state.tasks.map((item) =>
          item.isActive ? (
            <Modal isOpen={this.state.openModal2} toggle={this.openModal2}>
              <ModalBody>
                <form id={"myForm2"} onSubmit={this.editBtn}>
                  <input
                    type="text"
                    className={"form-control"}
                    value={item.title}
                  />
                  <select className={"form-control mt-2"}>
                    <option value="open">open</option>
                    <option value="pending">pending</option>
                    <option value="inprog">inprog</option>
                    <option value="complete">complete</option>
                  </select>
                </form>
              </ModalBody>
              <ModalFooter>
                <button className={"btn btn-success"} form={"myForm2"}>
                  edit
                </button>
              </ModalFooter>
            </Modal>
          ) : (
            ""
          )
        )}

        <div className="row mt-5">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header display-4">open</div>
              <div className="card-body">
                <ul className={"list-group"}>
                  {tasks
                    .filter((tasks) => tasks.status === "open")
                    .map((tasks, index) => {
                      return (
                        <li className={"list-group-item"} key={index}>
                          {tasks.title}{" "}
                          <span className={"close"}>
                            <input
                              value={tasks.title}
                              checked={tasks.isActive}
                              type="checkbox"
                              onChange={this.handleValue}
                            />
                          </span>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="card-footer">
                <button
                  className={"btn btn-success mr-3"}
                  onClick={this.openModal}
                >
                  add tasks
                </button>
                <button
                  className={"btn btn-warning mr-3 "}
                  onClick={this.openModal2}
                >
                  edit
                </button>
                <button
                  className={"btn btn-danger mr-3 "}
                  onClick={() => this.deleteBtn()}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-header display-4">pending</div>
              <div className="card-body">
                <ul className={"list-group"}>
                  {tasks
                    .filter((tasks) => tasks.status === "pending")
                    .map((tasks, index) => {
                      return (
                        <li className={"list-group-item"} key={index}>
                          {tasks.title}{" "}
                          <span className={"close"}>
                            <input
                              value={tasks.title}
                              checked={tasks.isActive}
                              type="checkbox"
                              onChange={this.handleValue}
                            />
                          </span>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="card-footer">
                <button
                  className={"btn btn-success mr-3"}
                  onClick={this.openModal}
                >
                  add tasks
                </button>
                <button
                  className={"btn btn-warning mr-3 "}
                  onClick={this.openModal2}
                >
                  edit
                </button>
                <button
                  className={"btn btn-danger mr-3 "}
                  onClick={() => this.deleteBtn()}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-header display-4">inprog</div>
              <div className="card-body">
                <ul className={"list-group"}>
                  {tasks
                    .filter((tasks) => tasks.status === "inprog")
                    .map((tasks, index) => {
                      return (
                        <li className={"list-group-item"} key={index}>
                          {tasks.title}{" "}
                          <span className={"close"}>
                            <input
                              value={tasks.title}
                              checked={tasks.isActive}
                              type="checkbox"
                              onChange={this.handleValue}
                            />
                          </span>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="card-footer">
                <button
                  className={"btn btn-success mr-3"}
                  onClick={this.openModal}
                >
                  add tasks
                </button>
                <button
                  className={"btn btn-warning mr-3 "}
                  onClick={this.openModal2}
                >
                  edit
                </button>
                <button
                  className={"btn btn-danger mr-3 "}
                  onClick={() => this.deleteBtn()}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-header display-4">complete</div>
              <div className="card-body">
                <ul className={"list-group"}>
                  {tasks
                    .filter((tasks) => tasks.status === "complete")
                    .map((tasks, index) => {
                      return (
                        <li className={"list-group-item"} key={index}>
                          {tasks.title}{" "}
                          <span className={"close"}>
                            <input
                              value={tasks.title}
                              checked={tasks.isActive}
                              type="checkbox"
                              onChange={this.handleValue}
                            />
                            <button>edit</button>
                          </span>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="card-footer">
                <button
                  className={"btn btn-success mr-3"}
                  onClick={this.openModal}
                >
                  add tasks
                </button>
                <button
                  className={"btn btn-warning mr-3 "}
                  onClick={this.openModal2}
                >
                  edit
                </button>
                <button
                  className={"btn btn-danger mr-3 "}
                  onClick={() => this.deleteBtn()}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
